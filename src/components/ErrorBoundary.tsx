import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Property Brochure App:', error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.clear();
    } catch (e) {
      // ignore
    }
    window.location.href = window.location.pathname;
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#f7f7f4] text-stone-900 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 sm:p-8 rounded-3xl shadow-xl border border-stone-200 text-center space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-1.5">
              <h2 className="text-xl font-bold text-stone-900 font-serif-luxury">
                Property Dey Brochure
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                The application encountered a display refresh issue. Click below to restore the brochure and view all properties.
              </p>
            </div>

            <button
              onClick={this.handleReset}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1c3829] hover:bg-[#254936] text-white font-semibold text-xs shadow-md transition-all active:scale-[0.98]"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Restore & Reload Brochure</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
